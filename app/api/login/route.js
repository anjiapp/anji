import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const dynamic = 'force-dynamic' // defaults to auto

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
export async function POST() {
    if (req.method === 'POST') {
        // Process a POST request
        const auth = getAuth();
        console.log(req.body)
        signInWithEmailAndPassword(auth, req, req)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        res.status(200).json({ name: 'John Doe' })
    } else {
        // Handle any other HTTP method
    }
}