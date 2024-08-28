import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "@/app/page";

const leftStep = 60 + 4,
  topStep = 60 + 4;

describe("Movement simulator", () => {
  it("contains the bot on the top-left of the grid container", () => {
    render(<Page />);

    const networkContainer = screen.getByTestId("network-container");
    const bot = screen.getByTestId("bot");

    expect(networkContainer).toContainElement(bot);

    expect(bot).toHaveStyle({
      top: "",
      left: "",
    });
  });

  it("moves the bot properly on keypress", async () => {
    render(<Page />);

    const bot = screen.getByTestId("bot");

    fireEvent.keyDown(document.body, {
      key: "Enter",
    });

    expect(bot).toHaveStyle({
      top: "",
      left: leftStep,
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowDown",
    });

    expect(bot).toHaveClass("active-border-bottom");

    expect(bot).toHaveStyle({
      top: "",
      left: leftStep,
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowDown",
    });

    expect(bot).toHaveStyle({
      top: topStep,
      left: leftStep,
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowLeft",
    });

    expect(bot).toHaveClass("active-border-left");

    expect(bot).toHaveStyle({
      top: topStep,
      left: leftStep,
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowLeft",
    });

    expect(bot).toHaveStyle({
      top: topStep,
      left: "",
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowUp",
    });

    expect(bot).toHaveClass("active-border-top");

    expect(bot).toHaveStyle({
      top: topStep,
      left: "",
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowUp",
    });

    expect(bot).toHaveStyle({
      top: "",
      left: "",
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowRight",
    });

    expect(bot).toHaveClass("active-border-right");

    expect(bot).toHaveStyle({
      top: "",
      left: "",
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowRight",
    });

    expect(bot).toHaveStyle({
      top: "",
      left: leftStep,
    });
  });

  it("does not throw the bot off the grid", async () => {
    render(<Page />);

    const bot = screen.getByTestId("bot");

    for (let i = 0; i < 4; i++) {
      fireEvent.keyDown(document.body, {
        key: "ArrowRight",
      });
    }

    expect(bot).toHaveStyle({
      top: "",
      left: leftStep * 4,
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowRight",
    });

    expect(bot).toHaveStyle({
      top: "",
      left: leftStep * 4,
    });

    for (let i = 0; i < 4; i++) {
      fireEvent.keyDown(document.body, {
        key: "ArrowDown",
      });
    }

    expect(bot).toHaveStyle({
      top: topStep * 4,
      left: leftStep * 4,
    });

    fireEvent.keyDown(document.body, {
      key: "ArrowRight",
    });

    expect(bot).toHaveStyle({
      top: topStep * 4,
      left: leftStep * 4,
    });
  });
});
