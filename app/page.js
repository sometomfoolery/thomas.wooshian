import styles from './page.module.css';
import { getSession } from "@/lib/auth";
import LoginForm from "@/components/LoginForm";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const user = await getSession();

  return (
    <main className={styles.main}>
      <h1>Thomas</h1>
      <p>This is thomas.wooshian.com</p>
      { user ? (
        <div className = {styles.subtitle}>
          <p className = {styles.subtitle}> Welcome back, {user.username}</p>
          <LogoutButton />
        </div>
      ) : (
        <div className = {styles.subtitle}>
          <p className = {styles.subtitle}>Welcome</p>
          <LoginForm />
        </div>
      )}
    </main>
  );
}