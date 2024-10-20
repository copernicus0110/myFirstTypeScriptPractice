import { ReactNode } from "react"

// children
//コンポーネントの引数の型
// && ? の使い方
const Child = ({
    children,
    user
}: {
    children: ReactNode,
    user: {
        name: string,
        age?: number,
        isChild: boolean,
        birthDay?: Date,
        profile?: {
            height?: number,
            weight?: number
        }
    }
}) => {
    return <div>
        <h2>Child</h2>
        {
            children
        }
        <p>{user.name}</p>
        <p>{user.age ? `${user.age + 10}歳` : "null"}</p>
        <p>{user.isChild ? "子供" : "大人"}</p>
        <p>{user.birthDay?.toLocaleDateString()}</p>
        <p>{user.profile?.height && `${user.profile.height}`}</p>
        <p>{user.profile?.weight && `${user.profile.weight}`}</p>
    </div>
}

export const Practice = () => {
    return <div>
        <h1>Practice</h1>
        <Child user = {{
        name: "kanno",
        age: 23,
        isChild: false,
        birthDay: new Date(),
        profile: {
            // height: 177,
            weight: 77,
        }
    }}>
            親から渡った値
        </Child>
    </div>
}



