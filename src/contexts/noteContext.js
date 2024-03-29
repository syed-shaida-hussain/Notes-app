import {useReducer , createContext , useContext , useState} from "react"

const NoteContext = createContext();

const noteReducer = (state , action) => {
    switch (action.type) {
        case "GET_NOTES" :
            return {...state , notes : (state.notes , action.payload) }
        case "GET_CURR_NOTE" : 
            return {...state , currNote : (state.currNote , action.payload)}
        case "DELETE_NOTE" :
            return {...state , notes : (state.notes.filter(item => item._id !== action.payload._id))}
        case "GET_TRASH_NOTES" :
            return {...state , trashedNotes : (state.trashedNotes , action.payload) }
        case "GET_ARCHIVED_NOTES" :
            return {...state , archives : (state.archives, action.payload) }
        case "ARCHIVE_NOTE" :
            return {...state , archives : (state.archives , action.payload)}
        case "TRASH_NOTE" :
            return {...state , trashedNotes : (state.trashedNotes , action.payload)}
    }
}

const initialNotesData = {title : "" , noteText : "" , pin : false , color : "" , createdAt : "", order : ""}

const NoteProvider = ({children}) => {
    const [noteState , dispatchNote] = useReducer( noteReducer , { notes : [] , currNote : {} , archives : [] , trashedNotes : [] })
    const [ notesData , setNotesData ] = useState(initialNotesData)
    const [ isEditModalActive , setIsEditModalActive ] = useState(false)
    const [ isColorModalActive , setIsColorModalActive] = useState(false)
    const [isDarkMode , setIsDarkMode] = useState(false)
    return <NoteContext.Provider value = {{noteState , dispatchNote , notesData , setNotesData , isColorModalActive , setIsColorModalActive , isEditModalActive , setIsEditModalActive , isDarkMode, setIsDarkMode}}>
        {children}
    </NoteContext.Provider>
}

const useNote = () => useContext(NoteContext)

export {NoteProvider , useNote}