interface Player {
  id: string;
  name: string;
  age: number;
  type: string;
}

const omitObj: Omit<Player, "id"> = {
  name: "Mashrafee Bin Martuza",
  type: "Batsman",
  age: 30,
};

const pickObj: Pick<Player, "name" | "type"> = {
  name: "Sakib Al Hasan",
  type: "Allrounder",
};

console.log({ omitObj, pickObj });
