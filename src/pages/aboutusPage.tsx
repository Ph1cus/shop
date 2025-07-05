import { Card } from "../components/Card"
import { Heading1, Heading3 } from "../components/Typography"

const aboutusPage = () => {
  return (
    <div className="mx-auto mt-10 p-8 max-w-6xl bg-white rounded-2xl shadow-xl space-y-6">
      <Heading1>Про нас</Heading1>
      <p>Привіт! Ми — майстерня, де народжується краса з найменших деталей.<br />
          Наша історія почалася з любові до рукоділля, яка з роками перетворилась на справу життя.</p>
      <p>Все починалося з кількох моточків ниток, жменьки бісеру та бажання створювати щось особливе. Спочатку — для себе, потім — для друзів, 
        а згодом — для всіх, хто цінує ручну роботу, унікальні речі та тепло в кожному стібку.</p>
      <p>Ми віримо, що бісер — це не просто дрібні намистинки. Це мова кольору, терпіння, почуттів. Це спосіб передати характер, настрій, пам’ять.</p>
      <p>Сьогодні ми — це:</p>
      <ul className="list-disc list-inside text-gray-700 pl-4 space-y-1">
        <li><b>Авторські прикраси й сувеніри з бісеру</b>, зроблені з душею;</li>
        <li><b>Магазин матеріалів для творчості</b> — щоб кожен міг створити щось своє;</li>
        <li><b>Місце натхнення</b> — де люди знаходять ідеї, спілкуються, розвиваються.</li>
      </ul>
      <p>Ми любимо працювати на замовлення — створювати щось, що матиме особливий сенс саме для вас.<br />
        Ми любимо допомагати початківцям — пояснювати, ділитися досвідом, радити.<br />
        Ми любимо, коли наші вироби стають частинкою чийогось свята, подарунка, чи просто — приємного дня.</p>
      <p>Цей магазин — не просто місце продажу. Це місце, де живе натхнення, і кожна покупка — це частинка нашої спільної історії. 💛</p>

    {/* Картки */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10  max-w-4xl mx-auto justify-center">
      <Card>
        <img
          src="/images/ava.png"
          alt="Фото засновника"
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-pink-200"
        />
        <Heading3>Киця</Heading3>
        <p className="text-pink-400 font-semibold">Засновниця</p>
        <p className="text-gray-600 text-sm">
          Натхненниця проєкту, яка вірить у силу ручної творчості та справжню майстерність.
        </p>
      </Card>
      <Card>
        <img
          src="/images/ava2.png"
          alt="Фото розробника"
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-200"
        />
        <Heading3>Кіт</Heading3>
        <p className="text-green-400 font-semibold">Розробник</p>
        <p className="text-gray-600 text-sm">
          Розробник проєкту, який витртив всі сльози піт і кров на цей проект, а отримав всього 2 банки енергетика.
        </p>
      </Card>
    </div>


    </div>
  )
}

export default aboutusPage
