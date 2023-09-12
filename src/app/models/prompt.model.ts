export interface Prompt{
    prompt: string,
    prompt_end: string | "",
    model: 'text-davinci-003',
    temperature: number | 0.4,
    max_tokens?: number | 2000,
}