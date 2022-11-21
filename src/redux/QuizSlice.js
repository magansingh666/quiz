import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    value: [{"name": "quiz1", "type": "type1", "quizId": 23, 
    "questions": [{"qText": "","qId": 34 ,
     "options": ["option1", "option2"], "correct": 2, "selected": 4},] },],

    next_quiz_id : 101, 
    next_q_id : 10001,
    current_quiz: 1,
    current_question: 1,
  },
  reducers: {
    addQuiz: (state, name, type) => {         
      state.value.push({"name": name, "type": "mcq", "quizId": state.next_quiz_id });
      state.next_quiz_id +=  1 ;
    },


    addQuestion: (state, quizId, ) => {
      state.value -= 1;
    },


    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = quizSlice.actions

export default quizSlice.reducer