'use client';
import {
    PromptInput,
    PromptInputButton,
    PromptInputModelSelect,
    PromptInputModelSelectContent,
    PromptInputModelSelectItem,
    PromptInputModelSelectTrigger,
    PromptInputModelSelectValue,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputToolbar,
    PromptInputTools,
} from '@/components/ui/shadcn-io/ai/prompt-input';
import { MicIcon, PaperclipIcon } from 'lucide-react';
import { type FormEventHandler, use, useState } from 'react';

const models = [
    { id: 'gpt-4o', name: 'GPT-4o' },
    { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet' },
    { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro' },
];

interface LlmClientProps {
    updateProblem: (value: [string, any][]) => void
}

const LlmClient = ({ updateProblem }: LlmClientProps) => {
    const [text, setText] = useState<string>('');
    const [model, setModel] = useState<string>(models[0].id);
    const [status, setStatus] = useState<
        'submitted' | 'streaming' | 'ready' | 'error'
    >('ready');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if (!text) {
            return;
        }
        setTimeout(() => {
            setStatus('streaming');
        }, 200);

        console.log("Fetching problem for request:", text)

        const response = await fetch("http://127.0.0.1:8000/generate/problem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ human_message: text }),
        });

        // if (!response.ok) {
        //     throw new Error(`Response Status: ${response.status}`)
        // }
        const result = await response.json()
        const arrResult = Object.entries(result)

        updateProblem(arrResult)

        // console.log(result)

        setStatus('submitted');
        setTimeout(() => {
            setStatus('ready');
            setText('');
        }, 2000);
    };
    return (
        <div className='p-8 w-full'>
            <PromptInput onSubmit={handleSubmit}>
                <PromptInputTextarea
                    onChange={(e: any) => setText(e.target.value)}
                    value={text}
                    placeholder="Type your message..."
                />
                <PromptInputToolbar>
                    <PromptInputTools>
                        <PromptInputButton>
                            <PaperclipIcon size={16} />
                        </PromptInputButton>
                        <PromptInputButton>
                            <MicIcon size={16} />
                            <span>Voice</span>
                        </PromptInputButton>
                        <PromptInputModelSelect onValueChange={setModel} value={model}>
                            <PromptInputModelSelectTrigger>
                                <PromptInputModelSelectValue />
                            </PromptInputModelSelectTrigger>
                            <PromptInputModelSelectContent>
                                {models.map((model) => (
                                    <PromptInputModelSelectItem key={model.id} value={model.id}>
                                        {model.name}
                                    </PromptInputModelSelectItem>
                                ))}
                            </PromptInputModelSelectContent>
                        </PromptInputModelSelect>
                    </PromptInputTools>
                    <PromptInputSubmit disabled={!text} status={status} />
                </PromptInputToolbar>
            </PromptInput></div>
    );
};
export default LlmClient;