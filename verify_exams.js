import { EXAM_STREAMS } from './src/data/exams.js';
if (EXAM_STREAMS && typeof EXAM_STREAMS === 'object') {
    console.log('EXAM_STREAMS successfully loaded.');
    console.log('Streams found:', Object.keys(EXAM_STREAMS).join(', '));

    // Basic validation of the structure
    for (const streamId in EXAM_STREAMS) {
        const stream = EXAM_STREAMS[streamId];
        if (!stream.exams || !Array.isArray(stream.exams)) {
            throw new Error(`Stream ${streamId} has no exams array!`);
        }
        console.log(`Stream ${streamId} has ${stream.exams.length} exams.`);
    }
} else {
    throw new Error('EXAM_STREAMS is not defined or not an object!');
}
