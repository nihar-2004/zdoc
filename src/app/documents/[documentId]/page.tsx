import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Toolbar } from "./toolbar";
interface DocumentIdProps {
    params: Promise<{documentId: string}>; 
};
const DocumentIdPage = async ({params}: DocumentIdProps) => {
    const {documentId} = await params;
    return (  
        <div className='min-h-screen bg-[#FAFBFD]'>
            <Navbar/>
            <Toolbar />
            <Editor/>
        </div>
    );
}
 
export default DocumentIdPage;