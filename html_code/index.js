import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
const InlineCode = require('@editorjs/inline-code');

const editor = new EditorJS({ 

    holder: 'editorjs', 

    tools: { 
        header: {
            class: Header, 
            inlineToolbar: ['link'] 
        }, 
        list: { 
            class: List, 
            inlineToolbar: [
                'link',
                'bold',
                'italic'
            ] 
        },
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            }
        },
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
        }
    }
})

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', function() {
    editor.save().then((outputData) => {
        console.log('Article data: ', outputData);
        //localStorage.setItem('Memo', JSON.stringify(outputData));
        //document.write(outputData);
        var myJSON = outputData.blocks;
        var dataJSON = [];
        var myJSONObj = Object.keys(myJSON).length;
        for (var i = 0; i < myJSONObj; i++){
            dataJSON[i] = myJSON[i]["data"]["text"];
        }
        //dataJSON = JSON.stringify(dataJSON);
        document.getElementById("result").innerHTML = dataJSON[0];
        for (let index = 1; index < myJSONObj; index++) {
            var tmp = document.createElement("div");
            var tmp2 = document.createTextNode(dataJSON[index]);
            tmp.appendChild(tmp2);
            document.body.appendChild(tmp);
        }
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
})