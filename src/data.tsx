import Dashboard from "./screens/dashboard"
import Contact from "./screens/contactus"
import Subscription from "./screens/subscription"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
export default function(){
    const data=[
        {
            id:0,
            label:"Dashboard",
            img:<DashboardIcon/>,
            component:<Dashboard/>,
            path:"/dashboard"

        },
        {
            id:1,
            label:"Contact",
            img:<PhonePausedIcon/>,
            component:<Contact/>,
            path:"/contact"

        },
        {
            id:2,
            label:"Subscription",
            img:<SubscriptionsIcon/>,
            component:<Subscription/>,
            path:"/subscription"

        }
    ]
    return data
}

// export default data