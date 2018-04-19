export interface Question {
  description: string;
  answerOptions: { id: string, text: string }[];
  correctAnswers: string[];
}
