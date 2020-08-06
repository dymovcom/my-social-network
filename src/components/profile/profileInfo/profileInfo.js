import React from "react";
import s from './profileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.blockPhoto}>
                <div className={s.photo}>
                    <img src="https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg" alt="ava"/>
                </div>
                <button className={s.btnEdit}>Редактировать профиль</button>
            </div>
            <div className={s.blockInfo}>
                <div className={s.name}>
                    <h1>Антон Дымов</h1>
                </div>
                <div className={s.info}>
                    <div className={s.row}>
                        <div className={s.rowName}>
                            День рождения:
                        </div>
                        <div className={s.rowValue}>
                            31.08.1992 г.
                        </div>
                    </div>
                    <div className={s.row}>
                        <div className={s.rowName}>
                            Город:
                        </div>
                        <div className={s.rowValue}>
                            Оренбург
                        </div>
                    </div>
                    <div className={s.row}>
                        <div className={s.rowName}>
                            Семейное положение:
                        </div>
                        <div className={s.rowValue}>
                            женат
                        </div>
                    </div>
                    <div className={s.row}>
                        <div className={s.rowName}>
                            Образование:
                        </div>
                        <div className={s.rowValue}>
                            ОГУ
                        </div>
                    </div>
                    <div className={s.row}>
                        <div className={s.rowName}>
                            Место работы:
                        </div>
                        <div className={s.rowValue}>
                            ООО "Фирма"
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;