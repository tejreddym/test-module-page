import React, { useRef, useState, useEffect, useCallback } from 'react';
import { X, Eraser, Trash2, Maximize2, Minimize2, Move } from 'lucide-react';
import './RoughNote.css';

const RoughNote = ({ onClose }) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const containerRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [color, setColor] = useState('#1e40af'); // JEE Blue
    const [lineWidth, setLineWidth] = useState(2);

    // Window State
    const [pos, setPos] = useState({ x: 420, y: window.innerHeight - 530 }); // Initial bottom-left-ish
    const [size, setSize] = useState({ width: 600, height: 450 });

    // Interaction State
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [resizeStart, setResizeStart] = useState({ width: 0, height: 0, x: 0, y: 0 });
    const [resizeDir, setResizeDir] = useState(''); // 'se', 'e', 's'

    // Canvas Image Data Cache (for resizing)
    const [savedCanvas, setSavedCanvas] = useState(null);

    // Initialize Canvas
    useEffect(() => {
        if (isMinimized) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        const context = canvas.getContext('2d');
        context.scale(dpr, dpr);
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        contextRef.current = context;

        // Ensure white background or restore previous
        if (savedCanvas) {
            context.putImageData(savedCanvas, 0, 0);
        } else {
            context.fillStyle = '#ffffff';
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
    }, [size.width, size.height, isMinimized]); // Re-run when canvas physical size changes

    useEffect(() => {
        if (contextRef.current) {
            contextRef.current.strokeStyle = color;
            contextRef.current.lineWidth = lineWidth;
        }
    }, [color, lineWidth]);

    // Save canvas state before resizing
    const saveCanvasData = () => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setSavedCanvas(ctx.getImageData(0, 0, canvas.width, canvas.height));
    };

    // --- Drawing Handlers ---
    const getCoordinates = (event) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();

        let clientX, clientY;
        if (event.touches && event.touches.length > 0) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const startDrawing = (event) => {
        if (isDragging || isResizing) return;
        const { x, y } = getCoordinates(event);
        contextRef.current.beginPath();
        contextRef.current.moveTo(x, y);
        setIsDrawing(true);
        if (event.touches) event.preventDefault();
    };

    const draw = (event) => {
        if (!isDrawing) return;
        const { x, y } = getCoordinates(event);
        contextRef.current.lineTo(x, y);
        contextRef.current.stroke();
        if (event.touches) event.preventDefault();
    };

    const stopDrawing = () => {
        if (!isDrawing) return;
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        setSavedCanvas(null);
    };

    // --- Dragging Handlers ---
    const handleDragStart = (e) => {
        if (e.target.closest('.header-actions')) return; // Don't drag if clicking buttons
        let clientX = e.clientX || (e.touches && e.touches[0].clientX);
        let clientY = e.clientY || (e.touches && e.touches[0].clientY);

        setIsDragging(true);
        setDragStart({ x: clientX - pos.x, y: clientY - pos.y });
    };

    // --- Resizing Handlers ---
    const handleResizeStart = (e, dir) => {
        e.stopPropagation();
        e.preventDefault();
        saveCanvasData(); // Backup drawing before reflow

        let clientX = e.clientX || (e.touches && e.touches[0].clientX);
        let clientY = e.clientY || (e.touches && e.touches[0].clientY);

        setIsResizing(true);
        setResizeDir(dir);
        setResizeStart({
            width: size.width,
            height: size.height,
            x: clientX,
            y: clientY
        });
    };

    // --- Global Window Events ---
    const handlePointerMove = useCallback((e) => {
        let clientX = e.clientX || (e.touches && e.touches[0].clientX);
        let clientY = e.clientY || (e.touches && e.touches[0].clientY);

        if (isDragging) {
            setPos({
                x: clientX - dragStart.x,
                y: clientY - dragStart.y
            });
        } else if (isResizing) {
            const dx = clientX - resizeStart.x;
            const dy = clientY - resizeStart.y;

            let newWidth = resizeStart.width;
            let newHeight = resizeStart.height;

            if (resizeDir.includes('e')) newWidth = Math.max(300, resizeStart.width + dx);
            if (resizeDir.includes('s')) newHeight = Math.max(200, resizeStart.height + dy);

            setSize({ width: newWidth, height: newHeight });
        }
    }, [isDragging, isResizing, dragStart, resizeStart, resizeDir]);

    const handlePointerUp = useCallback(() => {
        setIsDragging(false);
        setIsResizing(false);
    }, []);

    useEffect(() => {
        if (isDragging || isResizing) {
            document.addEventListener('mousemove', handlePointerMove);
            document.addEventListener('mouseup', handlePointerUp);
            document.addEventListener('touchmove', handlePointerMove, { passive: false });
            document.addEventListener('touchend', handlePointerUp);
        } else {
            document.removeEventListener('mousemove', handlePointerMove);
            document.removeEventListener('mouseup', handlePointerUp);
            document.removeEventListener('touchmove', handlePointerMove);
            document.removeEventListener('touchend', handlePointerUp);
        }
        return () => {
            document.removeEventListener('mousemove', handlePointerMove);
            document.removeEventListener('mouseup', handlePointerUp);
            document.removeEventListener('touchmove', handlePointerMove);
            document.removeEventListener('touchend', handlePointerUp);
        };
    }, [isDragging, isResizing, handlePointerMove, handlePointerUp]);

    return (
        <div
            ref={containerRef}
            className={`rough-note-container shadow-2xl ${isMinimized ? 'minimized' : ''} ${isDragging ? 'dragging' : ''}`}
            style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                width: isMinimized ? '200px' : `${size.width}px`,
                height: isMinimized ? '40px' : `${size.height}px`,
                bottom: 'auto' // Override css bottom
            }}
        >
            <div
                className="rough-note-header"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
            >
                <div className="header-left">
                    <Move size={16} className="drag-handle" />
                    <span>Rough Sheet</span>
                </div>
                <div className="header-actions">
                    <button onClick={() => setIsMinimized(!isMinimized)} title={isMinimized ? 'Maximize' : 'Minimize'}>
                        {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                    </button>
                    <button onClick={onClose} title="Close">
                        <X size={16} />
                    </button>
                </div>
            </div>

            {!isMinimized && (
                <>
                    <div className="rough-note-toolbar">
                        <div className="tool-group">
                            <button
                                className={`tool-btn ${color === '#1e40af' && lineWidth < 10 ? 'active' : ''}`}
                                onClick={() => { setColor('#1e40af'); setLineWidth(2); }}
                                style={{ color: '#1e40af' }}
                            >
                                <div className="color-dot" style={{ background: '#1e40af' }} /> Pen
                            </button>
                            <button
                                className={`tool-btn ${color === '#ef4444' ? 'active' : ''}`}
                                onClick={() => { setColor('#ef4444'); setLineWidth(6); }}
                                style={{ color: '#ef4444' }}
                            >
                                <div className="color-dot" style={{ background: '#ef4444' }} /> Highlt
                            </button>
                            <button
                                className={`tool-btn ${color === '#ffffff' ? 'active' : ''}`}
                                onClick={() => { setColor('#ffffff'); setLineWidth(20); }}
                            >
                                <Eraser size={16} /> Eraser
                            </button>
                        </div>
                        <div className="v-sep"></div>
                        <button className="tool-btn danger" onClick={clearCanvas}>
                            <Trash2 size={16} /> Clear All
                        </button>
                    </div>

                    <div className="canvas-wrapper">
                        <canvas
                            onMouseDown={startDrawing}
                            onMouseMove={draw}
                            onMouseUp={stopDrawing}
                            onMouseLeave={stopDrawing}
                            onTouchStart={startDrawing}
                            onTouchMove={draw}
                            onTouchEnd={stopDrawing}
                            ref={canvasRef}
                            className="rough-canvas"
                        />
                    </div>
                    <div className="rough-note-footer">
                        <p>Write calculations here. Touch screened users can use stylus or finger.</p>
                    </div>

                    {/* Resizer Handles */}
                    <div className="resizer resizer-e" onMouseDown={(e) => handleResizeStart(e, 'e')} onTouchStart={(e) => handleResizeStart(e, 'e')}></div>
                    <div className="resizer resizer-s" onMouseDown={(e) => handleResizeStart(e, 's')} onTouchStart={(e) => handleResizeStart(e, 's')}></div>
                    <div className="resizer resizer-se" onMouseDown={(e) => handleResizeStart(e, 'se')} onTouchStart={(e) => handleResizeStart(e, 'se')}></div>
                </>
            )}
        </div>
    );
};

export default RoughNote;
