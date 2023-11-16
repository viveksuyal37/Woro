"use client";

/*Internal imports */
import { useEffect, useState } from "react";

/*External imports */
import { useSelector } from "react-redux";
import classNames from "classnames";

/*Custom components */
import { getCardsState } from "@/Redux/slices/CardSlice";
import PendingApprovals from "@/components/Dashboard/BottomRow/PendingApprovals";
import PostInfo from "@/components/Dashboard/BottomRow/PostInfo";
import TrendingNow from "@/components/Dashboard/BottomRow/TrendingNow";
import DriveContainer from "@/components/Dashboard/Drives/DriveContainer";
import RecentNotifications from "@/components/Dashboard/RecentNotifications/RecentNotifications";
import RowTwoLeft from "@/components/Dashboard/RowTwoLeft/RowTwoLeft";
import AccountsContainer from "@/components/Dashboard/SocialMediaAccounts/AccountsContainer";

export default function Home() {
  const state = useSelector(getCardsState);
  const [expandedCard, setExpandedCard] = useState();

  useEffect(() => {
    const temp = [];

    for (const key in state) {
      if (state[key] === true) {
        temp.push(key);
      }
    }
    setExpandedCard(temp[0]);
  }, [state]);

  return (
    <section className="w-full h-max">
      {/* dashboard top (2rows)*/}
      <div
        className={classNames(
          "flex overflow-hidden opacity-1 transition-all duration-300 ease-in-out justify-between mt-[13.8px] 2xl:mt-[19.8px] gap-[21px] 2xl:gap-[30px]",
          {
            "w-0 h-0 opacity-0":
              expandedCard === "trendingNews" ||
              expandedCard === "pendingApprovals",
          }
        )}
      >
        {/* left dashboard */}
        <div
          className={classNames(
            "flex w-full flex-col overflow-hidden gap-[12.3px] 2xl:gap-[20px]",
            { hidden: expandedCard === "recentNotification" }
          )}
        >
          {/* row1 */}
          <AccountsContainer expandedCard={expandedCard} />
          {/* row2 */}
          <RowTwoLeft expandedCard={expandedCard} />
        </div>

        <div
          className={classNames(
            "flex  flex-col overflow-hidden gap-[10px] 2xl:gap-[14.3px] ",
            { "w-full h-full": expandedCard === "recentNotification" },
            { "w-[16.2vw]  max-w-[500px]": !expandedCard }
          )}
        >
          {/* right dashboard */}
          <DriveContainer expandedCard={expandedCard} />
          <RecentNotifications
            expandedCard={expandedCard}
            cardId="recentNotification"
          />
          {/* <RecentMessages /> */}
        </div>
      </div>
      {/*bottom dashboard */}
      <div
        className={classNames(
          "flex mt-[13.25px] 2xl:mt-[19px] gap-[20.3px] 2xl:gap-[29px] justify-between",
          { "h-[21.29vh]": !expandedCard }
        )}
      >
        <PostInfo expandedCard={expandedCard} />
        <PendingApprovals
          expandedCard={expandedCard}
          cardId="pendingApprovals"
        />

        <TrendingNow expandedCard={expandedCard} cardId="trendingNews" />
      </div>
    </section>
  );
}
