interface DocumentIdProps {
    params: Promise<{documentId: string}>; 
};
const DocumentIdPage = async ({params}: DocumentIdProps) => {
    const {documentId} = await params;
    return (  
        <div>
            Document ID: {documentId}
        </div>
    );
}
 
export default DocumentIdPage;