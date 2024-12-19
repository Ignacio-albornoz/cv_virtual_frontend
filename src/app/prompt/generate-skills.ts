import { Prompt } from "../models/prompt.model"


export const PromptToGenerateSkills: Prompt = {
    prompt: "Quiero hacer una lista de habilidades y competencias para mi currículum vitae. Tengo una lista de cursos que he tomado, pero no estoy seguro de qué habilidades y competencias engloban. ¿Puedes ayudarme a identificar las habilidades y competencias que podrían ser relevantes para mi currículum vitae? Por favor, utiliza chain-of-thought para ayudarme a identificar las habilidades y competencias que podrían ser relevantes para mi currículum vitae basándote en la lista de cursos que he tomado:",
    prompt_end: "output: agrupa las competencias en 3, describiendolas brevemente y de ser posible nombrar tecnologias y actitudes solicitadas en desarrollo web, no mas de 25 palabras por grupo. la respuesta en formato JSON",
    model: "text-davinci-003",
    temperature: 0.2
}