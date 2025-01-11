import React from 'react'

function Smo() {
  const features1 =[
    {
      name:"Post per Month",
      smoBasic:"10",
      smoAdvance:"15",
      smoBooster:"20",
      smoSilver :"10",
      smoGold :"15",
      smoPlatinum :"20"
    },
    {
      name:"Social Media Platforms",
      smoBasic:"5",
      smoAdvance:"5",
      smoBooster:"5",
      smoSilver :"5",
      smoGold :"15",
      smoPlatinum :"5"
    },
    {
      name:"Strategy",
      smoBasic:"Platform-Specific",
      smoAdvance:"Customized",
      smoBooster:"Customized",
      smoSilver :"Platform-Specific	",
      smoGold :"Customized",
      smoPlatinum :"Customized"
    },{
      name:"Content Creation Reach",
      smoBasic:"Non-Specific",
      smoAdvance:"Optimal",
      smoBooster:"Optimal",
      smoSilver :"Non-Specific",
      smoGold :"Optimal",
      smoPlatinum :"Optimal"
    },
    {
      name:"Performance Tracking	",
      smoBasic:"Yes",
      smoAdvance:"Yes",
      smoBooster:"Yes",
      smoSilver :"Yes",
      smoGold :"Yes",
      smoPlatinum:"Yes"
    },
    {
      name:"Post Scheduling	",
      smoBasic:"Yes",
      smoAdvance:"Yes",
      smoBooster:"Yes",
      smoSilver :"Yes",
      smoGold :"Yes",
      smoPlatinum :"Yes"
    },
    {
      name:"In-depth Hashtag Research	",
      smoBasic:"Yes",
      smoAdvance:"Yes",
      smoBooster:"Yes",
      smoSilver :"Yes",
      smoGold :"Yes",
      smoPlatinum :"Yes"
    },
    {
      name:"Audience Engagement	",
      smoBasic:"Yes",
      smoAdvance:"Yes",
      smoBooster:"Yes",
      smoSilver :"Yes",
      smoGold :"Yes",
      smoPlatinum :"Yes"
    },
    {
      name:"Reels/Shorts per Month",
      smoBasic:"",
      smoAdvance:"",
      smoBooster:"",
      smoSilver :"2",
      smoGold :"4",
      smoPlatinum :"8"
    },
    {
      name:"Reporting Type",
      smoBasic:"Basic		",
      smoAdvance:"In-depth with Analytics",
      smoBooster:"Advanced with Insights	",
      smoSilver :"Basic	",
      smoGold :"In-depth with Analytics	",
      smoPlatinum :"Advanced with Insights	"
    },
    {
      name:"Reporting Frequency		",
      smoBasic:"Monthly	",
      smoAdvance:"Monthly	",
      smoBooster:"Weekly & Monthly	",
      smoSilver :"Monthly		",
      smoGold :"Monthly		",
      smoPlatinum :"Weekly & Monthly		"
    }
  ]
  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 shadow-sm">
      {/* Table Header */}
      <div className="grid grid-cols-7 gap-4 bg-green-100 p-4 rounded-md font-semibold">
        <div className="text-center">Feature</div>
        <div className="text-center">SMO Basic</div>
        <div className="text-center">SMO Advance</div>
        <div className="text-center">SMO Booster</div>
        <div className="text-center">SMO Silver</div>
        <div className="text-center">SMO Gold</div>
        <div className="text-center">SMO Platinum</div>
      </div>

      {/* Data Rows */}
      {features1.map((feature, index) => (
        <div
          key={index}
          className="grid grid-cols-7 gap-4 p-4 border-b last:border-none bg-white hover:bg-gray-100 rounded-md mt-2"
        >
          <div className="text-center font-medium">{feature.name}</div>
          <div className="text-center">{feature.smoBasic}</div>
          <div className="text-center">{feature.smoAdvance}</div>
          <div className="text-center">{feature.smoBooster}</div>
          <div className="text-center">{feature.smoSilver}</div>
          <div className="text-center">{feature.smoGold}</div>
          <div className="text-center">{feature.smoPlatinum}</div>
        </div>
      ))}
    </div>
  );
}

export default Smo