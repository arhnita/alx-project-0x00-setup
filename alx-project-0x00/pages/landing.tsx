import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return(
        <div>
            <h1 className="text-xl font-extraLight">Landing Page</h1>
            <Card />

<Button title="Click Me" />


<Button title="Small Button" size="small" shape="rounded-lg" />

<Button 
  title="Custom Button" 
  className="bg-green-500 hover:bg-green-600" 
  onClick={() => console.log('Clicked!')}
/>
        </div>
    )
}

export default Landing;