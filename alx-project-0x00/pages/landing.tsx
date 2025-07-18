import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return(
        <div>
            <h1 className="text-xl font-extraLight">Landing Page</h1>
            <Card />

<Button title="Click Me" styles="bg-red-500"/>


<Button title="Small Button" size="small" shape="rounded-sm" styles="bg-green-500"/>
<Button title="Small Button" size="small" shape="rounded-md" styles="bg-green-500"/>
<Button title="Small Button" size="small" shape="rounded-full" styles="bg-green-500"/>

<Button 
  title="Custom Button" styles="bg-blue-500"
  className="bg-green-500 hover:bg-green-600" 
  onClick={() => console.log('Clicked!')}
/>
        </div>
    )
}

export default Landing;