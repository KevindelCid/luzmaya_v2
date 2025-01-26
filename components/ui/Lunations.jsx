import React from "react";
import { View, Text } from "react-native";
import { GridCholqij } from "@/components/Layout/GridCholqij";
import { NawalCard } from "./NawalCard";
import { getImage } from "@/utils";
import { useColorScheme } from "@/hooks/useColorScheme";

export const Lunations = ({ lunations }) => {
  const colorScheme = useColorScheme();

  const totalEnergies =
    lunations.engendramientoAuxIzq?.energy +
    lunations.engendramiento?.energy +
    lunations.engendramientoAuxDer?.energy +
    lunations.auxIz?.energy +
    lunations.nawal?.energy +
    lunations.auxDer?.energy +
    lunations.destinoAuxIzq?.energy +
    lunations.destino?.energy +
    lunations.destinoAuxDer?.energy;

  return (
    <View style={{ paddingVertical: 20 }}>
      {Object.keys(lunations).length ? (
        <>
          <GridCholqij>
            <NawalCard
              style={{ zIndex: 10 }}
              imageSource={() => getImage(lunations.cargador.nawal)}
              nawalName={lunations.cargador.nawal}
              title={`Cargador`}
              day={lunations.cargador.energy}
            />
            <NawalCard
              imageSource={() => getImage(lunations.nawal.nawal)}
              nawalName={lunations.nawal.nawal}
              title={`Nacimiento`}
              day={lunations.nawal.energy}
            />
            <NawalCard
              imageSource={() => getImage(lunations.haab.month)}
              nawalName={lunations.haab.month}
              title={`Día año Solar`}
              day={lunations.haab.numberDay}
              isSolarDay={true}
            />
          </GridCholqij>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "800",
                marginBottom: 8,
                color: colorScheme === "dark" ? "white" : "black",
              }}
            >
              9 Lunaciones, energías totales: {totalEnergies}
            </Text>
          </View>
          <GridCholqij>
            <NawalCard
              imageSource={() => getImage(lunations.engendramientoAuxIzq.nawal)}
              nawalName={lunations.engendramientoAuxIzq.nawal}
              title={`aux engend. izq`}
              day={lunations.engendramientoAuxIzq.energy}
            />
            <NawalCard
              imageSource={() => getImage(lunations.engendramiento.nawal)}
              nawalName={lunations.engendramiento.nawal}
              title={`Engendramiento`}
              day={lunations.engendramiento.energy}
            />
            <NawalCard
              imageSource={() => getImage(lunations.engendramientoAuxDer.nawal)}
              nawalName={lunations.engendramientoAuxDer.nawal}
              title={`aux engend. der`}
              day={lunations.engendramientoAuxDer.energy}
            />
          </GridCholqij>
          {/* middle row */}
          <GridCholqij>
            <NawalCard
              imageSource={() => getImage(lunations.auxIz.nawal)}
              nawalName={lunations.auxIz.nawal}
              title={`aux izq`}
              day={lunations.auxIz.energy}
            />
            <NawalCard
              imageSource={() => getImage(lunations.nawal.nawal)}
              nawalName={lunations.nawal.nawal}
              title={`Nacimiento`}
              day={lunations.nawal.energy}
            />
            <NawalCard
              imageSource={() => getImage(lunations.auxDer.nawal)}
              nawalName={lunations.auxDer.nawal}
              title={`aux der`}
              day={lunations.auxDer.energy}
            />
          </GridCholqij>
          {/* destiny row */}
          <GridCholqij>
            <NawalCard
              imageSource={() => getImage(lunations.destinoAuxIzq.nawal)}
              nawalName={lunations.destinoAuxIzq.nawal}
              title={`aux dest. izq`}
              day={lunations.destinoAuxIzq.energy}
            />
            <NawalCard
              imageSource={() => getImage(lunations.destino.nawal)}
              nawalName={lunations.destino.nawal}
              title={`destino`}
              day={lunations.destino.energy}
            />
            <NawalCard
              imageSource={() => getImage(lunations.destinoAuxDer.nawal)}
              nawalName={lunations.destinoAuxDer.nawal}
              title={`aux dest. der`}
              day={lunations.destinoAuxDer.energy}
            />
          </GridCholqij>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};
