export interface Question {
  id: string;
  text: string;
  answerOptions: { id: string, text: string }[];
  correctAnswers: string[];
}
