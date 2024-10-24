import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import cl from "./Login.module.scss";
import { login } from "../../store/slices/authSlice.js";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState(""); // Change to username
    const [password, setPassword] = useState("");
    const loading = useSelector((state) => state.auth.status === "loading");
    const error = useSelector((state) => state.auth.error);

    const handleLogin = () => {
        dispatch(login({ username, password })).then((response) => {
            // Проверяем статус ответа
            if (response.meta.requestStatus === "fulfilled") {
                // Перенаправляем на главную страницу
                navigate("/");
            } else {
                // Обрабатываем ошибку, если статус не 200
                console.log("Ошибка входа:", response.error.message);
            }
        });
    };

    return (
        <div className={cl.Login}>
            <div>
                <h2>Войти</h2>

                <input
                    type="text" // Change input type to text for username
                    placeholder="Имя пользователя" // Update placeholder
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span>
                    <button onClick={handleLogin} disabled={loading}>
                        {loading ? "Загрузка..." : "Войти"}
                    </button>
                    <Link to="/signup">Регистрация</Link>
                </span>
                {error && <p>Error: {error}</p>}
            </div>
        </div>
    );
};

export default Login;
