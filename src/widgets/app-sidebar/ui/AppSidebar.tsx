import { ChartPie, CheckSquare, CreditCard, Smile, Ticket } from "lucide-react";

import { RouterMenu } from "@/shared/ui/router-menu";

export const AppSidebar = () => (
  <RouterMenu.Panel>
    <RouterMenu.Item label="Trends" to="/trends" icon={ChartPie} />
    <RouterMenu.Item label="Tasks" to="/tasks" icon={CheckSquare} />
    <RouterMenu.Item label="Tickets" to="/tickets" icon={Ticket} />
    <RouterMenu.Item label="Payments" to="/payments" icon={CreditCard} />

    <RouterMenu.Group label="Clients" icon={Smile}>
      <RouterMenu.Item label="List" to="/clients/list" />
      <RouterMenu.Item label="Reviews" to="/clients/reviews" />
      <RouterMenu.Item label="Notifications" to="/clients/notifications" />
    </RouterMenu.Group>
  </RouterMenu.Panel>
);
