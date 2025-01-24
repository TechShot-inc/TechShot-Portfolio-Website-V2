import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
import "./ErrorMessage.css"
export default function ErrorMessage({ error }) {

    return (
        < AnimatePresence mode="wait" initial={false} >
            {error && (<InputError
                message={error}
                key={error} />)}
        </AnimatePresence >
    )
}
const InputError = ({ message }) => {
    return (
        <motion.p
            className={`Error${message.includes(' ') ? `Sentence` : `Text`}`}
            {...framer_error}
        >
            <MdError />
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}
