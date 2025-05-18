import { Session } from "next-auth";
import { ChartComponent } from "../DashBordChart/AriaChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

const ProfilePage = ( {session}:{session:Session|null}) => {
  const user = session?.user;
  console.log(user);
  return (
   <div className="bg-white">
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-5 px-2">
		<div>
			<Card>
  <CardHeader>

    <CardDescription>
		New Customers
	</CardDescription>
  </CardHeader>
  <CardContent>
    <h1 className="text-3xl font-extrabold">500+</h1>
  </CardContent>
  <CardFooter>
    <p>Visitor for last six month</p>
  </CardFooter>
</Card>

		</div>
		<div>
			<Card>
  <CardHeader>

    <CardDescription>
		New Customers
	</CardDescription>
  </CardHeader>
  <CardContent>
    <h1 className="text-3xl font-extrabold">500+</h1>
  </CardContent>
  <CardFooter>
    <p>Visitor for last six month</p>
  </CardFooter>
</Card>

		</div>
		<div>
			<Card>
  <CardHeader>

    <CardDescription>
		New Customers
	</CardDescription>
  </CardHeader>
  <CardContent>
    <h1 className="text-3xl font-extrabold">500+</h1>
  </CardContent>
  <CardFooter>
    <p>Visitor for last six month</p>
  </CardFooter>
</Card>

		</div>
		<div>
			<Card>
  <CardHeader>

    <CardDescription>
		New Customers
	</CardDescription>
  </CardHeader>
  <CardContent>
    <h1 className="text-3xl font-extrabold">500+</h1>
  </CardContent>
  <CardFooter>
    <p>Visitor for last six month</p>
  </CardFooter>
</Card>

		</div>
	</div>
	<ChartComponent/>
   </div>

  );
};

export default ProfilePage;
