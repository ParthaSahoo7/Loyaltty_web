import React from 'react'

function Ppc() {
  const features1 =[
    {
      name:"No of Campaigns",
      smoBasic:"1 or 2",
      smoAdvance:"Up to 3",
      smoBooster:"Up to 5",
      smoSilver :"1 or 2",
      smoGold :"Up to 3",
      smoPlatinum :"Up to 5"
    },
    {
      name:"Keyword Research",
      smoBasic:"Basic",
      smoAdvance:"Advanced",
      smoBooster:"Comprehensive",
      smoSilver :"",
      smoGold :"",
      smoPlatinum :""
    },
    {
      name:"Targeting",
      smoBasic:"",
      smoAdvance:"",
      smoBooster:"",
      smoSilver :"Basic",
      smoGold :"Advanced",
      smoPlatinum :"Complete"
    },{
      name:"Ad Variations",
      smoBasic:"1 or 2",
      smoAdvance:"Multiple",
      smoBooster:"Multiple",
      smoSilver :"1 or 2",
      smoGold :"Multiple",
      smoPlatinum :"Multiple"
    },
    {
      name:"A/B Testing",
      smoBasic:"None",
      smoAdvance:"Yes",
      smoBooster:"Yes",
      smoSilver :"None",
      smoGold :"Yes",
      smoPlatinum:"Yes"
    },
    {
      name:"Ad Extensions",
      smoBasic:"Basic",
      smoAdvance:"Advanced",
      smoBooster:"Complete",
      smoSilver :"Basic",
      smoGold :"Advanced",
      smoPlatinum :"Complete"
    },
    {
      name:"Pixel Setup",
      smoBasic:"",
      smoAdvance:"",
      smoBooster:"",
      smoSilver :"Basic",
      smoGold :"Advanced",
      smoPlatinum :"Advanced"
    },
    {
      name:"Type of Tracking",
      smoBasic:"Basic",
      smoAdvance:"Advanced",
      smoBooster:"Complete",
      smoSilver :"",
      smoGold :"",
      smoPlatinum :""
    },
    {
      name:"Optimization Frequency",
      smoBasic:"Monthly",
      smoAdvance:"Weekly",
      smoBooster:"Bi-weekly",
      smoSilver :"Monthly",
      smoGold :"Weekly",
      smoPlatinum :"Bi-weekly	"
    },
    {
      name:"Type of Targeting",
      smoBasic:"Basic",
      smoAdvance:"Advanced",
      smoBooster:"Complete",
      smoSilver :"Basic",
      smoGold :"Advanced",
      smoPlatinum :"Hyper"
    },
    {
      name:"Dedicated Account Manager	",
      smoBasic:"None",
      smoAdvance:"None",
      smoBooster:"Yes",
      smoSilver :"None",
      smoGold :"None",
      smoPlatinum :"Yes"
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

export default Ppc