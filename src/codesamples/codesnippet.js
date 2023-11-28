import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";

const CodeSnippet = ({ statement, codeSnippet, output }) => {
  return (
    <div>
      <div className="border-3 shadow-lg m-2">
        <div className="m-20">
          <h3 className="font-bold m-1">{statement}</h3>
          <div className="grid grid-cols-2">
            <div>
              <CodeBlock text={codeSnippet} language="javascript" />
            </div>
            <div className="bg-white m-3 p-4">
              <h3 className="font-bold">Output:</h3>
              {output}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodeSnippet;
