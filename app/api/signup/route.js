import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const dynamic = 'force-dynamic' // defaults to auto
export const getServerSideProps = async () => {
    return {
        props: {
            dynamic
        }
    }
}
export async function POST(props) {
        // Process a POST request
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, props.user, props.password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    return Response.json({ name: 'John Doe' })
}