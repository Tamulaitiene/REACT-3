import axios from "axios";
import { useEffect, useState } from "react";
import CreateNew from "./Components/CreateNew";
import GemList from "./Components/GemList";
import GemNav from "./Components/GemNav"
import Modal from "./Components/Modal";
import Sort from "./Common/Sort";


function App() {
    const [gems, setGems] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now())
    const [showModal, setShowModal] = useState(false)
    const [showCreateNew, setShowCreateNew] = useState(false)
    const [modalGem, setModalGem] = useState({
        product: '',
        quantity: '',
        price: '',
        in_stock: '',
        last_order: ''
      })
  
    const [filterBy, setFilterBy] = useState('');

    useEffect(() => {
        if (filterBy) {
            axios.get('http://localhost:3003/stock-filter/'+filterBy)
            .then(res => {
                setGems(res.data);
            })
        }
    }, [filterBy])

    const reset = () => {
        setLastUpdate(Date.now());
    }


    const [sortBy, setSortBy] = useState('');
    useEffect(() => {
        if (sortBy) {
            setGems(Sort(gems, sortBy, setFilterBy));
        }
    }, [sortBy])

    const [searchBy, setSearchBy] = useState('');

    useEffect(() => {
        if (searchBy) {
        axios.get('http://localhost:3003/gems-search/?s='+searchBy)
            .then(res => {
                setGems(res.data);
            })
        }
    }, [searchBy])


    useEffect(() => {
        axios.get('http://localhost:3003/gems')
        .then(res => {
            setGems(res.data);
        })
    }, [lastUpdate])

    const create = gem => {
        setShowCreateNew(false);
          axios.post('http://localhost:3003/gems', gem)
              .then(res => {
                  setLastUpdate(Date.now());
              })
      }
  
      const edit = (gem, id) => {
          setShowModal(false);
          axios.put('http://localhost:3003/gemsa/'+id, gem)
              .then(res => {
                  setLastUpdate(Date.now());
              })
      }
  
      const remove = (id) => {
          setShowModal(false);
          axios.delete('http://localhost:3003/gems/'+id)
              .then(res => {
                  setLastUpdate(Date.now());
              })
      }
  
      const modal = (gem) => {
          setShowModal(true);
          setModalGem(gem);
      }
  
      const hide = () => {
          setShowModal(false);
      }
  
      const hideCreateNew = () => {
        setShowCreateNew(false);
    }
  
      const createNew = () => {
        setShowCreateNew(true)
    }


    return (
        <div className="gem">
            <GemNav filter={setFilterBy} search={setSearchBy} sort={setSortBy} reset={reset}></GemNav>
            <GemList gems={gems} modal={modal} sort={setSortBy} remove={remove}></GemList>
            <Modal edit={edit} hide={hide} gem={modalGem} showModal={showModal}></Modal>
            <CreateNew create={create} hide={hideCreateNew} showModal={showCreateNew}></CreateNew>
            <div className="buttonsStop">
              <button onClick={createNew}>Add</button>
            </div>
        </div>
    )
}

export default App;