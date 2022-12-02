import React from 'react'
import './Editor.css'
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editoremail = () => {
    return (
        <div>
            <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            /></div>
    )
}

export default Editoremail