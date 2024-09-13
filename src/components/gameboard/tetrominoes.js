// tetrominoes.js
export const TETROMINOS = {
    0: { shape: [[0]], color: 'transparent', type: 0 },

    1: {
        shape: [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ],
        color: 'cyan',
        type: 1,
    },
    2: {
        shape: [
            [0, 2, 0],
            [0, 2, 0],
            [2, 2, 0],
        ],
        color: 'blue',
        type: 2,
    },
    3: {
        shape: [
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3],
        ],
        color: 'orange',
        type: 3,
    },
    4: {
        shape: [
            [4, 4],
            [4, 4],
        ],
        color: 'yellow',
        type: 4,
    },
    5: {
        shape: [
            [0, 5, 5],
            [5, 5, 0],
            [0, 0, 0],
        ],
        color: 'green',
        type: 5,
    },
    6: {
        shape: [
            [0, 6, 0],
            [6, 6, 6],
            [0, 0, 0],
        ],
        color: 'purple',
        type: 6,
    },
    7: {
        shape: [
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0],
        ],
        color: 'red',
        type: 7,
    },
};
