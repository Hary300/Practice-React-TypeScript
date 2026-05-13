type ProfileCardProp = {
  name: string;
  age: number;
  country: string;
};

export default function ProfileCard({ name, age, country }: ProfileCardProp) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}
