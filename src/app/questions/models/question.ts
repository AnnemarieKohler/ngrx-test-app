export interface Question {
  text: string;
  answerOptions: { id: string, text: string }[];
  correctAnswers: string[];
}
