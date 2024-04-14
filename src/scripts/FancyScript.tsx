import dynamic from "next/dynamic"


function RealComponent() {
  return <div>THIS IS THE REAL COMPONENT</div>
}

export function FancyScript() {
  const isBrowserMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === "enabled"

  if(isBrowserMockingEnabled) {
    const DevComponent = dynamic(() => import('./dev/FancyScriptMock'));

    return <DevComponent />
  }

  return <RealComponent />
}