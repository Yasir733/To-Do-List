import { useRef, useState } from 'react'
import './App.css'
import { MdOutlineCancel } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


function App() {
  let [item, setItem] = useState("")
  let [items, setItems] = useState([])
  let [toggle,settoggle] = useState({show:false,id:""})
  let [showList, setShowList] = useState(false);

  let editRef = useRef(null)
  let search = ({ target: { value } }) => {
    setItem(value)
  }
  let addd = () => {
    setItems([...items, item])
    setItem("")
    setShowList(true);
  }

  let dlete = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }
  let editItem = (id)=>{
    editRef.current.focus();
    settoggle({show:true,id})
    setItem(items[id])
  }
  let updateItems = ()=>{
    items[toggle.id] = item;
    setItems([...items])
    setItem("")
    settoggle({show:false})
  }

  return (
    <>
      <input type="text" onChange={search} placeholder='Enter the item' ref={editRef} value={item}/>
      <div className="upbts">
        <button onClick={addd} className='add'>Add</button>
        {toggle.show && <button className='add' onClick={updateItems}>update</button>}
      </div>
      <section>
      {showList ? (
        <ol>
          {items.map((item, index) => (
            <li key={index}>{item}
              <div className="btttns">
                <MdOutlineCancel key={index} onClick={() => dlete(index)} /><CiEdit onClick={() => editItem(index)} />
              </div>
            </li>))}
        </ol>
      ) : (
        <h3>List is empty . . .</h3>
      )}
    </section>
    </>
  )
}

export default App