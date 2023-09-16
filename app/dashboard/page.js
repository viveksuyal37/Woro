/*Custom components */
import PendingApprovals from "@/components/Dashboard/BottomRow/PendingApprovals";
import PostInfo from "@/components/Dashboard/BottomRow/PostInfo";
import TrendingNow from "@/components/Dashboard/BottomRow/TrendingNow";
import DriveContainer from "@/components/Dashboard/Drives/DriveContainer";
import RecentNotifications from "@/components/Dashboard/RecentNotifications/RecentNotifications";
import RowTwoLeft from "@/components/Dashboard/RowTwoLeft/RowTwoLeft";
import AccountsContainer from "@/components/Dashboard/SocialMediaAccounts/AccountsContainer";

export default function Home() {
  return (
    <main>
      {/* dashboard top (2rows)*/}
      <div className="flex  justify-between mt-[22px] gap-[22px]">
        {/* left dashboard */}
        <div className="flex flex-col gap-[25px]">
          {/* row1 */}
          <AccountsContainer />
          {/* row2 */}
          <RowTwoLeft />
        </div>

        <div className="flex flex-col gap-[25px] w-[16.5789vw] max-w-[400px]">
          {/* right dashboard */}
          <DriveContainer />
          <RecentNotifications />
          {/* <RecentMessages /> */}
        </div>
      </div>
      {/*bottom dashboard */}
      <div className="flex mt-[22px] min-h-[202px] gap-[22px] justify-between">
        <PostInfo />
        <PendingApprovals />

        <TrendingNow />
      </div>
    </main>
  );
}
