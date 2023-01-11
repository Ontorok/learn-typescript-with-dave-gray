# 1. Pick<Type, Keys>

Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

<pre>
interface Player {
    id: string;
    name: string;
    age: number;
    type: string;
}

const pickObj: Pick<<code>Player</code>, "name" | "type"> = {
  name: "Sakib Al Hasan",
  type: "Allrounder",
};
</pre>

# 2. Omit<Type, Keys>

Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).

<pre>
interface Player {
    id: string;
    name: string;
    age: number;
    type: string;
}

const omitObj: Omit<<code>Player</code>, "id"> = {
  name: "Mashrafee Bin Martuza",
  type: "Batsman",
  age: 30,
};
</pre>
