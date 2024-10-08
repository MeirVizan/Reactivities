import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import ActivityFilter from "./ActivityFilter";


export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { loadActivities, activityRegistry, loadingInitial} = activityStore;

    useEffect(() => {
        if(activityRegistry.size <= 1) loadActivities();
    }, [loadActivities])


    if (loadingInitial) return <LoadingComponents content='Loading app' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilter />
            </Grid.Column>
        </Grid>
    )
})