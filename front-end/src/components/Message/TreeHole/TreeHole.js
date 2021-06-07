import './TreeHole.css'; 
import treeHoleImage from '../img/treeHole.png';
function TreeHole() {
const handleSend = () => {
    document.getElementById("treeHoleFormInput").value = '';
}
            return (
                <div id="treeHoleOuter">
                    <div id="treeHoleImageFormWrapper">
                        <img id="treeHoleImage" src={treeHoleImage} />
                        <div id="treeHoleForm">
                            <input type='text' id="treeHoleFormInput" placeholder="Tell me your concerns"/>
                            <button onClick={handleSend}>SEND</button>
                        </div>

                    </div>
                    <br/>
                    <hr/>
                    
                </div>
            );
 
 
}

export default TreeHole;
