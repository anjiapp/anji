"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@/utils/supabase/client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const supabase = createClient();
export default function AuthForm() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const displayMode = () => {
		if (searchParams.get("signup") === "") {
			return 1;
		} else if (searchParams.get("forgot-password") === "") {
			return 2;
		} else {
			return 0;
		}
	};

	const SignInForm = () => {
		const handleSignIn = async (e) => {
			e.preventDefault();
			const email = e.target.email.value;
			const password = e.target.password.value;
			const { user, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});
			if (error) {
				alert(error.message);
			}
			router.push("/auth/callback");
		};

		return (
			<>
				<form
					className={"flex flex-col w-full"}
					onSubmit={handleSignIn}
				>
					<p>Email Address</p>
					<input
						type="email"
						placeholder="email"
						name={"email"}
						style={styles.input}
					/>
					<p>Password</p>
					<input
						type="password"
						placeholder="password"
						name={"password"}
						style={styles.input}
					/>
					<button
						type="submit"
						className={"bg-[#C4554D] w-full p-2.5 rounded"}
					>
						Sign In
					</button>
				</form>
				<a
					className={"underline self-center hover:cursor-pointer"}
					href={"?forgot-password"}
				>
					Forgot your password?
				</a>
				<a
					className={"underline self-center hover:cursor-pointer"}
					href={"?signup"}
				>
					Don't have an account? Sign Up
				</a>
				<p className={"self-center"}>OR</p>
				<button
					className="px-4 py-2 w-[60%] border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
					onClick={async () =>
						await supabase.auth.signInWithOAuth({
							provider: "google",
						})
					}
				>
					<img
						class="w-6 h-6"
						src="https://www.svgrepo.com/show/475656/google-color.svg"
						loading="lazy"
						alt="google logo"
					/>
					<span>Login with Google</span>
				</button>
				<button
					onClick={async () =>
						await supabase.auth.signInWithOAuth({
							provider: "facebook",
						})
					}
				>
					Sign in with Facebook
				</button>
				<button
					onClick={async () =>
						await supabase.auth.signInWithOAuth({
							provider: "twitter",
						})
					}
				>
					Sign in with Twitter
				</button>
				<button
					onClick={async () =>
						await supabase.auth.signInWithOAuth({
							provider: "azure",
						})
					}
				>
					Sign in with Microsoft
				</button>
			</>
		);
	};

	const SignUpForm = () => {
		const handleSignUp = async (e) => {
			e.preventDefault();
			const name = e.target.name.value;
			const email = e.target.email.value;
			const password = e.target.password.value;
			const confirmPassword = e.target["confirm-password"].value;
			if (password !== confirmPassword) {
				alert("Passwords do not match");
				return;
			}
			const { user, error } = await supabase.auth.signUp({
				name: name,
				email: email,
				password: password,
			});
			if (error) {
				alert(error.message);
			}
			router.push("/auth/callback");
		};

		return (
			<>
				<form
					className={"flex flex-col w-full"}
					onSubmit={handleSignUp}
				>
					<p>Name</p>
					<input
						type="text"
						placeholder="name"
						name={"name"}
						style={styles.input}
					/>
					<p>Email Address</p>
					<input
						type="email"
						placeholder="email"
						name={"email"}
						style={styles.input}
					/>
					<p>Password</p>
					<input
						type="password"
						placeholder="password"
						name={"password"}
						style={styles.input}
					/>
					<p>Confirm Password</p>
					<input
						type="password"
						placeholder="confirm password"
						name={"confirm-password"}
						style={styles.input}
					/>
					<button
						type="submit"
						className={"bg-[#C4554D] w-full p-2.5 rounded"}
					>
						Sign Up
					</button>
				</form>
				<a href={"?"} className="self-start">
					Already have an account? Log In
				</a>
				<p>OR</p>
				<button
					onClick={async () =>
						await supabase.auth.signInWithOAuth({
							provider: "google",
						})
					}
				>
					Sign in with Google
				</button>
				<button
					onClick={async () =>
						await supabase.auth.signInWithOAuth({
							provider: "facebook",
						})
					}
				>
					Sign in with Facebook
				</button>
				<button
					onClick={async () =>
						await supabase.auth.signInWithOAuth({
							provider: "twitter",
						})
					}
				>
					Sign in with Twitter
				</button>
				<button
					onClick={async () =>
						await supabase.auth.signInWithOAuth({
							provider: "azure",
						})
					}
				>
					Sign in with Microsoft
				</button>
			</>
		);
	};

	return (
		<div className={"flex flex-col items-center"}>
			{displayMode() === 0 && <SignInForm />}
			{displayMode() === 1 && <SignUpForm />}
			{displayMode() === 2 && <p>Forgot Password</p>}
		</div>
	);
}

const styles = {
	input: {
		border: "1px solid #C4554D",
		borderRadius: "5px",
		padding: "10px",
		marginBottom: "10px",
	},
};