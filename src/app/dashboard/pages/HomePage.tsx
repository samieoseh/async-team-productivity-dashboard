import { useUserStore } from "../../../shared/store/user";

export default function HomePage() {
  const { user } = useUserStore();
  return <div>Welcome, {user?.email}</div>;
}
