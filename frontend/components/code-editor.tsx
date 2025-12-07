import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';


const CodeEditor = () => {
    return (
        <div className="w-full h-full">
            <Editor
                defaultLanguage="python"
                height="100%"
                width="100%"
                defaultValue={`def greet(name):\n\tprint("Hello " + name + "!")\n\ngreet("Alex")\n`}
            />
        </div>
    )
}

export default CodeEditor