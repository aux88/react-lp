import style from "./Contact.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // フォームのデータを処理します
    console.log(data);
    setIsSuccess(true);
    reset();
  };

  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section id="contact" className={style.contact}>
      <div className="section-container">
        <h2>お問い合わせ</h2>
        {isSuccess && (
          <p className={style.successMessage}>お問い合わせが送信されました。</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="お名前"
            {...register("name", {
              required: "お名前を入力してください。",
            })}
          />
          {errors.name && (
            <p className={style.validationErrorText}>{errors.name.message}</p>
          )}
          <input
            placeholder="メールアドレス"
            {...register("email", {
              required: "メールアドレスを入力してください",
              pattern: {
                value: /^\S+@\S+\.\S+$/, // 正規表現によるメールアドレスのバリデーション
                message: "有効なメールアドレスを入力してください。",
              },
            })}
          />
          {errors.email && (
            <p className={style.validationErrorText}>{errors.email.message}</p>
          )}
          <input
            placeholder="電話番号"
            {...register("phone", {
              pattern: {
                value: /^[0-9]+$/, //数字のみ
                message: "電話番号は数字のみで入力してください。",
              },
            })}
          />
          {errors.phone && (
            <p className={style.validationErrorText}>{errors.phone.message}</p>
          )}
          <textarea placeholder="メッセージ"></textarea>
          <button type="submit">送信する</button>
        </form>
      </div>
    </section>
  );
};
