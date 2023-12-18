import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ChartBarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function NavBarTest() {
  return (
    <>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-2">
          <Image src={"/logo.svg"} width={100} height={100} alt="logo" />
        </div>
        <List>
          <Link href={"/Dashboard"}>
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Produtos
          </ListItem>
          <Link href={"/Colaboradores"}>
            <ListItem>
              <ListItemPrefix>
                <ChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Colaboradores
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <CalendarDaysIcon className="h-5 w-5" />
            </ListItemPrefix>
            Rotas
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Mensagens
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Configurações
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
}
