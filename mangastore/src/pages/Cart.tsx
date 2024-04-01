import { useAppSelector } from "../app/hooks";

function Cart() {
  const { cartItems, quantity, total } = useAppSelector((state) => state.shop);
  return (
    <div>
      <div>
        {cartItems.map((manga) => (
          <div key={manga.id}>
            <h3>{manga.title}</h3>
            <h1>{manga.price}</h1>
          </div>
        ))}
      </div>

      <div>
        <span>Total ({quantity}): ${total}</span>
      </div>
    </div>
  );
}
export default Cart;
