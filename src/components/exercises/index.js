// src/components/exercises/index.js
import MultipleChoiceExercise from './MultipleChoice';
import FillBlankExercise from './FillBlank';
import MatchPairsExercise from './MatchPairs';
import WordOrderExercise from './WordOrder';
import DictationExercise from './Dictation';
import PerfektMaster from './PerfektMaster';

export default {
    'multiple-choice': MultipleChoiceExercise,
    'fill-blank': FillBlankExercise,
    'match-pairs': MatchPairsExercise,
    'word-order': WordOrderExercise,
    'dictation': DictationExercise,
};

export { PerfektMaster };
