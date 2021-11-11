

// const n = .argv[2];

// let source = '';
// let regEx = '';
// for (let i = 0; i < n; i++) {
//     source += 'a';
//     regEx += 'a?';
// }
// regEx += source;

// const re = new RegExp(regEx);

// const match = re.test(source);
// if (match) {
//     console.log('matches');
// }
// else {
//     console.log("doesn't match");
// }
// Character matching token
console.log("hello world")
function CharacterToken(c) {
    this.c = c;
    console.log(CharacterToken)
}

// Operator token for representing things like ?
function OperatorToken(op) {
    this.op = op;
}

// A special concatenation token
function ConcatenationToken() {
}
/*function convertToPostfix(re) {
    const outputQueue = [];

    // Convert a?a?aa into postfix notation
    //
    //        a
    //        a?
    //        a?a
    //        a?a?
    //        a?a?.a
    // Final: a?a?.a.a.

    let outstandingCharacterToken = 0;

    for (let i = 0; i < re.length; i++) {
        const c = re[i];
        switch (c) {
            case '?':
                // There should be an outstanding character token to apply this
                // to
                if (outstandingCharacterToken === 0) {
                    throw new Error('Invalid regular expression.');
                }
                outputQueue.push(new OperatorToken(c));
                break;

            default:
                if (outstandingCharacterToken > 1) {
                    outstandingCharacterToken--;
                    outputQueue.push(new ConcatenationToken());
                }
                outputQueue.push(new CharacterToken(c));
                outstandingCharacterToken++;
                break;
        }
    }

    while (--outstandingCharacterToken > 0) {
        outputQueue.push(new ConcatenationToken());
    }

    return outputQueue;
}
//matchstate
function MatchState() {
}
//splitstate
function SplitState(outArrow1) {
    this.outArrows = [outArrow1, null];
}
//incompletenfa state
function State(c) {
    this.c = c;
    this.outArrows = [null];
}
// Represents a combined but still incomplete NFA
function Fragment(startState, incompleteOutArrows) {
    this.startState = startState;
    this.incompleteOutArrows = incompleteOutArrows;
}

// Represent one incomplete arrow coming out from the fragment
function IncompleteArrow(state, arrowIndex) {
    this.state = state;
    this.arrowIndex = arrowIndex;
}
//conversion process
function connectArrowsToState(incompleteOutArrows, state) {
    while (incompleteOutArrows.length) {
        const incompleteArrow = incompleteOutArrows.pop();
        const arrowIndex = incompleteArrow.arrowIndex;
        incompleteArrow.state.outArrows[arrowIndex] = state;
    }
}

// Postfix tokens: a?a?.a.a.
function convertToNFA(tokens) {
    const stack = [];

    tokens.forEach(token => {

        if (token instanceof ConcatenationToken) {
            // Incomplete NFA:
            //
            // >prevFragment1--->prevFragment2--->
            //
            const prevFragment2 = stack.pop();
            const prevFragment1 = stack.pop();
            connectArrowsToState(prevFragment1.incompleteOutArrows, prevFragment2.startState);
            const newFragment = new Fragment(prevFragment1.startState, prevFragment2.incompleteOutArrows);
            stack.push(newFragment);
        }
        else if (token instanceof OperatorToken && token.op === '?') {
            // Incomplete NFA:
            //  |->prevFragment->
            // >O
            //  |--------------->
            const prevFragment = stack.pop();

            // Construct a new fragment with out arrow #1 pointing to the
            // previous fragment's state
            const state = new SplitState(prevFragment.startState);
            const incompleteArrows = prevFragment.incompleteOutArrows;
            incompleteArrows.push(new IncompleteArrow(state, 1));
            const newFragment = new Fragment(state, incompleteArrows);
            stack.push(newFragment);
        }
        else if (token instanceof CharacterToken) {
            // Incomplete NFA:
            //
            // >O---->
            //
            const state = new State(token.c);
            const incompleteArrows = [
                new IncompleteArrow(state, 0)
            ];
            const newFragment = new Fragment(state, incompleteArrows);
            stack.push(newFragment);
        }
    });

    const fragment = stack.pop();
    const matchState = new MatchState();
    connectArrowsToState(fragment.incompleteOutArrows, matchState);
    return fragment.startState;
}
//code to test for match
function hasMatchState(states) {
    for (let i = 0; i < states.length; i++) {
        if (states[i] instanceof MatchState) {
            return true;
        }
    }
    return false;
}
//continuation
function addState(statesList, state) {
    if (statesList.indexOf(state) >= 0) {
        return;
    }

    if (state instanceof SplitState) {
        addState(statesList, state.outArrows[0]);
        addState(statesList, state.outArrows[1]);
        return;
    }

    statesList.push(state);
}

function step(currentStates, character) {
    // Set of states the NFA will be in after processing the current character
    let nextStates = [];

    currentStates.forEach(state => {
        if (state instanceof State &&
            state.c === character) {

            addState(nextStates, state.outArrows[0]);
        }
    });

    return nextStates;
}

// Run NFA (with provided starting state) to determine whether it matches source
function nfaMatches(state, inputText) {
    // Set of states the NFA is currently in
    let currentStates = [];
    addState(currentStates, state);

    for (let i = 0; i < inputText.length; i++) {
        const c = inputText[i];
        currentStates = step(currentStates, c);
    }

    // If after processing all the input text, we arrive at the MatchState then
    // it's a match!
    return hasMatchState(currentStates);
}

function RegularExpression(regEx) {
    this.regEx = regEx;
}

RegularExpression.prototype.test = function(source) {
    const tokens = convertToPostfix(this.regEx);
    const startState = convertToNFA(tokens);
    return nfaMatches(startState, source);
};
//finalcode
'use strict';

const util = require('util');

const n = process.argv[2];

let source = '';
let regEx = '';
for (let i = 0; i < n; i++) {
    source += 'a';
    regEx += 'a?';
}
regEx += source;

const re = new RegularExpression(regEx);

const match = re.test(source);
if (match) {
    console.log('matches');
}
else {
    console.log("doesn't match");
}*/