{
  inputs = {
    nixpkgs.url = "github:cachix/devenv-nixpkgs/rolling";
    nixpkgs-unstable.url = "github:nixos/nixpkgs/nixos-unstable";
    systems.url = "github:nix-systems/default";
    devenv.url = "github:cachix/devenv";
    devenv.inputs.nixpkgs.follows = "nixpkgs";
    asa1984-nvim.url = "github:asa1984/asa1984.nvim";
    asa1984-nvim.inputs.nixpkgs.follows = "nixpkgs";
  };

  nixConfig = {
    extra-trusted-public-keys =
      "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
  };

  outputs = { self, nixpkgs, devenv, systems, ... }@inputs:
    let forEachSystem = nixpkgs.lib.genAttrs (import systems);
    in {
      packages = forEachSystem (system: {
        devenv-up = self.devShells.${system}.default.config.procfileScript;
      });

      devShells = forEachSystem (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          pkgs-unstable = inputs.nixpkgs-unstable.legacyPackages.${system};
        in {
          default = devenv.lib.mkShell {
            inherit inputs pkgs;
            modules = [{
              env.PLAYWRIGHT_BROWSER_PATH =
                "${pkgs-unstable.playwright-driver.browsers}/chromium-1091/chrome-linux/chrome";
              packages =
                [ inputs.asa1984-nvim.packages.${system}.neovim-minimal ]
                ++ (with pkgs; [
                  flyctl
                  nixfmt
                  nodePackages.typescript-language-server
                ]);
              languages.javascript = {
                enable = true;
                corepack.enable = true;
              };
            }];
          };
        });
    };
}
