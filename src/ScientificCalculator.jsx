import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ScientificCalculator.css';
import { Calculator, X, Delete } from 'lucide-react';

const ScientificCalculator = ({ onClose }) => {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');
    const [isDegree, setIsDegree] = useState(true);

    // --- Dragging State ---
    const [pos, setPos] = useState({ x: window.innerWidth / 2 - 160, y: 100 }); // Centered-ish
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleNumber = (num) => {
        if (display === '0') {
            setDisplay(num);
        } else {
            setDisplay(display + num);
        }
    };

    const handleOperator = (op) => {
        setEquation(display + ' ' + op + ' ');
        setDisplay('0');
    };

    const handleClear = () => {
        setDisplay('0');
        setEquation('');
    };

    const handleBackspace = () => {
        if (display.length > 1) {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay('0');
        }
    };

    const calculate = () => {
        try {
            let expr = equation + display;
            // Basic sanitization
            let sanitizedExpr = expr.replace(/[^-()\d/*+.]/g, '');
            // Simple evaluation for basic ops
            const result = eval(sanitizedExpr);
            setDisplay(result.toString());
            setEquation('');
        } catch (e) {
            setDisplay('Error');
        }
    };

    const handleScientific = (func) => {
        const val = parseFloat(display);
        let result = 0;

        const toRad = (angle) => angle * (Math.PI / 180);
        const inputVal = isDegree ? toRad(val) : val;

        switch (func) {
            case 'sin': result = Math.sin(inputVal); break;
            case 'cos': result = Math.cos(inputVal); break;
            case 'tan': result = Math.tan(inputVal); break;
            case 'ln': result = Math.log(val); break;
            case 'log': result = Math.log10(val); break;
            case 'sqrt': result = Math.sqrt(val); break;
            case 'pi': result = Math.PI; break;
            case 'e': result = Math.E; break;
            default: return;
        }
        setDisplay(result.toFixed(8).replace(/\.?0+$/, ''));
    };

    // --- Dragging Handlers ---
    const handleDragStart = (e) => {
        if (e.target.closest('.calc-controls')) return; // Ignore buttons
        let clientX = e.clientX || (e.touches && e.touches[0].clientX);
        let clientY = e.clientY || (e.touches && e.touches[0].clientY);

        setIsDragging(true);
        setDragStart({ x: clientX - pos.x, y: clientY - pos.y });
    };

    const handlePointerMove = useCallback((e) => {
        if (!isDragging) return;
        let clientX = e.clientX || (e.touches && e.touches[0].clientX);
        let clientY = e.clientY || (e.touches && e.touches[0].clientY);

        setPos({
            x: clientX - dragStart.x,
            y: clientY - dragStart.y
        });
    }, [isDragging, dragStart]);

    const handlePointerUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
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
    }, [isDragging, handlePointerMove, handlePointerUp]);

    return (
        <div
            ref={containerRef}
            className={`calc-container shadow-2xl animate-in fade-in zoom-in duration-200 ${isDragging ? 'dragging' : ''}`}
            style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`
            }}
        >
            <div
                className="calc-header"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
            >
                <div className="calc-title flex items-center gap-2">
                    <Calculator size={16} />
                    <span>Scientific Calculator</span>
                </div>
                <div className="calc-controls">
                    <div className="dot yellow" onClick={handleClear} title="Clear All"></div>
                    <div className="dot red" onClick={onClose} title="Close"></div>
                </div>
            </div>

            <div className="calc-display-section">
                <div className="equation-preview">{equation}</div>
                <div className="main-display">{display}</div>
            </div>

            <div className="calc-grid">
                {/* Scientific Row 1 */}
                <button className="btn-sci" onClick={() => handleScientific('sin')}>sin</button>
                <button className="btn-sci" onClick={() => handleScientific('cos')}>cos</button>
                <button className="btn-sci" onClick={() => handleScientific('tan')}>tan</button>
                <button className={`btn-sci ${isDegree ? 'active' : ''}`} onClick={() => setIsDegree(!isDegree)}>
                    {isDegree ? 'deg' : 'rad'}
                </button>

                {/* Scientific Row 2 */}
                <button className="btn-sci" onClick={() => handleScientific('ln')}>ln</button>
                <button className="btn-sci" onClick={() => handleScientific('log')}>log</button>
                <button className="btn-sci" onClick={() => handleScientific('pi')}>π</button>
                <button className="btn-sci" onClick={() => handleScientific('e')}>e</button>

                {/* Scientific Row 3 */}
                <button className="btn-sci" onClick={() => setDisplay(display + '(')}>(</button>
                <button className="btn-sci" onClick={() => setDisplay(display + ')')}>)</button>
                <button className="btn-sci" onClick={() => handleScientific('sqrt')}>√</button>
                <button className="btn-sci" onClick={() => handleOperator('**')}>^</button>

                {/* Number Pad */}
                <button className="btn-num" onClick={() => handleNumber('7')}>7</button>
                <button className="btn-num" onClick={() => handleNumber('8')}>8</button>
                <button className="btn-num" onClick={() => handleNumber('9')}>9</button>
                <button className="btn-op" onClick={() => handleOperator('/')}>/</button>

                <button className="btn-num" onClick={() => handleNumber('4')}>4</button>
                <button className="btn-num" onClick={() => handleNumber('5')}>5</button>
                <button className="btn-num" onClick={() => handleNumber('6')}>6</button>
                <button className="btn-op" onClick={() => handleOperator('*')}>*</button>

                <button className="btn-num" onClick={() => handleNumber('1')}>1</button>
                <button className="btn-num" onClick={() => handleNumber('2')}>2</button>
                <button className="btn-num" onClick={() => handleNumber('3')}>3</button>
                <button className="btn-op" onClick={() => handleOperator('-')}>-</button>

                <button className="btn-num" onClick={() => handleNumber('0')}>0</button>
                <button className="btn-num" onClick={() => handleNumber('.')}>.</button>
                <button className="btn-eq" onClick={calculate}>=</button>
                <button className="btn-op" onClick={() => handleOperator('+')}>+</button>
            </div>

            <div className="calc-bottom-actions mt-2 flex justify-start">
                <button className="btn-backspace flex items-center justify-center" onClick={handleBackspace} title="Backspace" style={{
                    background: '#fef2f2',
                    color: '#ef4444',
                    border: '1px solid #fee2e2',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                }}>
                    <Delete size={20} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
};

export default ScientificCalculator;
