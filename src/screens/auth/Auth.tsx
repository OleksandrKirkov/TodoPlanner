import { AuthForm } from "./auth-form/AuthForm";

export function Auth() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-dark-800 p-8 rounded-lg shadow-md">
                <h2 className="font-semibold mb-4">Auth</h2>
                <AuthForm />
            </div> 
        </div>
    )
}
